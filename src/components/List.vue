<template>


	<section id="js-grid-list" class="grid-list" v-cloak>
	  <!--<Hello></Hello> -->


	  	<div>

	  		<b-row>
	  			<b-col class="bar-left" md="2">
					<div >
						<h3>Filtros</h3>
						<h6>Faixa de Preços</h6>
						<hr>
					    <section data-title="Formatter" id="demo3">
					      <div>
					        <vue-slider ref="slider3" v-bind="demo3" v-model="demo3.value"></vue-slider>
					      </div>
					    </section>

					</div>
	  			</b-col>


        		<b-col md="10">
					<div class="tool-bar">
						<b-container>
						    <b-row>
						        <b-col class="text">
						        	<h3>Resultados da Busca por</h3>
						        	<h6>Sua Pesquisa por Cruze encontrou {{car_posts.length}} veículo(s) em 2 páginas(s).</h6>
						        </b-col>
						        <b-col>
						        	<a id="bar2"class="grid-icon" v-on:click="layout = 'grid'" v-bind:class="{ 'active': layout == 'grid'}" title="Grid"></a>
						        	<a id="bar2"class="list-icon" v-on:click="layout = 'list'" v-bind:class="{ 'active': layout == 'list'}" title="List"></a>
								</b-col>
						    </b-row>
						</b-container>			
					</div>

					<div class="tool-bar" id="bar">
						<b-container>
							 <b-row>
								<b-col sm="8" cols="6" class="text">
									<h6 class="text-result">Veículos de {{searchAuto}}</h6>
								    <b-pagination size="sm" :total-rows="100" :per-page="10"></b-pagination>
						        </b-col>
						        <b-col sm="4" cols="6">
									  <div>
									  	<h6 >Ordenar por:</h6>
									    <b-form-select v-model="selected" :options="options" class="form-size mb-3" size="sm"  />
									  </div>
								</b-col>
						    </b-row>
					    </b-container>
					</div>					    

										
					<!-- Vue.js lets us choose which UL to show depending on the "layout" variable -->
					<ul v-if="layout === 'grid'" class="grid">
						<!-- A "grid" view with photos only -->
						<li v-for="car in car_posts" v-if="car.price >= demo3.value[0] && car.price <= demo3.value[1]">
							<a v-bind:href="car.url" v-bind:style="{ backgroundImage: 'url(' + car.image.large + ')' }" target="_blank"></a>
						</li>
					</ul>
					<div>
						<ul v-if="layout === 'list'" class="list">
							<li v-for="car in car_posts" v-if="car.price >= demo3.value[0] && car.price <= demo3.value[1]">	
								
								<b-container class="bv-example-row">
								    <b-row>

								    	<b-col md="4">
												<a v-bind:href="car.url" target="_blank">
													<img v-bind:src="car.image.small">
												</a>
								        </b-col>

								        <b-col md="8">
									        <b-row>
									        	<b-col>
										        	<h6>{{car.marca}}</h6>
										        	<h5>{{car.title}}</h5>
										        	<p>R$ {{car.price}},00</p>
									        		<hr>
									        	</b-col>
									        </b-row>						        
									        <b-row class="margin">
										        <b-col sm="3" cols="4">
													<b-row>
											        	<img id="icons" src="../assets/ano.png">
											        	<h6 class="text-aling">{{car.year}}/{{car.year}}</h6>
													</b-row>
													<b-row>
											        	<img id="icons" src="../assets/km.png">
											        	<h6 class="text-aling">{{car.km}}Km</h6>
										        	</b-row>
										        </b-col>
										        <b-col sm="3" cols="4">
													<b-row>
											        	<img id="icons" src="../assets/cor.png">
											        	<h6 class="text-aling">Cinza</h6>
										        	</b-row>
													<b-row>
											        	<img id="icons" src="../assets/combustivel.png">
											        	<h6 class="text-aling">Flex</h6>
										        	</b-row>						        	
										        </b-col>
										        <b-col sm="3" cols="4">
													<b-row>							        	
											        	<img id="icons" src="../assets/cambio.png">
											        	<h6 class="text-aling">Manual</h6>
										        	</b-row>
													<b-row>
											        	<img id="icons" src="../assets/placa.png">
											        	<h6 class="text-aling">AXX-111</h6>
										        	</b-row>
										        </b-col>
										        <b-col class="button" sm="3" >
										        	<button  class="btn btn-warning" v-on:click="counter += 1">+ Detalhes</button>
										        </b-col>
									        </b-row>
								        </b-col>

								    </b-row>
								</b-container>
								<hr>
							</li>
						</ul>
					</div>
				</b-col>

			</b-row>
		</div>					    	
					    
	</section>

</template>

<script>

import Hello from './Hello.vue'
import vueSlider from 'vue-slider-component';


	export default {
		components: { Hello, vueSlider },
	  name: 'js-grid-list',
	  data()  {
	  	return {
		  // The layout mode, possible values are "grid" or "list".
		    layout: 'list',
		    car_posts: [{
		    	marca: 'Chevrolet',
				title: 'Corsa',
				url: 'https://voltagead.com/tapping-ugc-offerpop/',
				price: 20000,
				year: 2000,
				km:255000,
				image: {
					'large': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/header-960x500-copy-960x500.jpg',
					'small': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/header-960x500-copy-300x300.jpg'
				}
			}, {
				marca: 'VW',
				title: 'GOL',
				url: 'https://voltagead.com/5-websites-get-design-right/',
				price: 20000,
				year: 2000,
				km:300000,
				image: {
					'large': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/HERO-960x500.jpg',
					'small': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/HERO-300x300.jpg'
				}
			}, {
				marca: 'Chevrolet',
				title: 'Cruze',
				url: 'https://voltagead.com/mariachis-hats-pies-oh/',
				price: 25000,
				year: 2005,
				km:220000,
				image: {
					'large': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/IMG_2629.2-960x582.jpg',
					'small': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/IMG_2629.2-300x300.jpg'
				}
			}, {
				marca: 'Ford',
				title: 'Fiesta',
				url: 'https://voltagead.com/big-buzz-big-brands-reebok-omnichannel/',
				price: 35000,
				year: 2014,
				km:100000,
				image: {
					'large': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/reebok-hero2.jpg',
					'small': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/reebok-hero2-300x300.jpg'
				}
			}, {
				marca: 'Chevrolet',
				title: 'Colorado',
				url: 'https://voltagead.com/denver-ad-day/',
				price: 30000,
				year: 2002,
				km:100000,
				image: {
					'large': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/sample-car-960x577.jpg',
					'small': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/sample-car-300x300.jpg'
				}
			}, {
				marca: 'Chevrolet',
				title: 'Onix',
				url: 'https://voltagead.com/using-ordinary-build-extraordinary/',
				price: 10000,
				year: 2010,
				km:300000,
				image: {
					'large': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/header-960x500.jpg',
					'small': 'https://2e64oz2sjk733hqp882l9xbo-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/header-300x300.jpg'
				}
			}],
			searchAuto: 1,
			show: true,
		    selected: 2,
		    options: [
		        { value: 1, text: 'Ano' },
		        { value: 2, text: 'Preço' },
		        { value: 3, text: 'Km' }
		    ]	,
	        demo3: {
	          value: [0, 35000],
	          width: '100%',
	          height: 8,
	          dotSize: 16,
	          min: 0,
	          max: 200000,
	          disabled: false,
	          show: true,
	          useKeyboard: false,
	          tooltip: 'always',
	          formatter: 'R${value}',
	          mergeFormatter: 'R${value1} ~ R${value2}',
	          bgStyle: {
	            backgroundColor: '#fff',
	            boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
	          },
	          tooltipStyle: {
	            backgroundColor: '#666',
	            borderColor: '#666'
	          },
	          processStyle: {
	            backgroundColor: '#999'
	          }
	        }
	 	};
	 },
	methods: {
	  even: function (numbers,selected) {
	  switch (selected) {
	  	case 1:
	  		  return numbers.sort(function (a, b) {
					  if (a.year > b.year) {
					    return 1;
					  }
					  if (a.year < b.year) {
					    return -1;
					  }
					  // a must be equal to b
					  return 0;
						});
	  		break;
	  	case 2:
	  		return numbers.sort(function (a, b) {
					  if (a.price > b.price) {
					    return 1;
					  }
					  if (a.price < b.price) {
					    return -1;
					  }
					  // a must be equal to b
					  return 0;
						});
	  		break;
	  	case 3:
		    return numbers.sort(function (a, b) {
					  if (a.km > b.km) {
					    return 1;
					  }
					  if (a.km < b.km) {
					    return -1;
					  }
					  // a must be equal to b
					  return 0;
						});
	  		break;
	  }
	    
	  }

	  }
	
};


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
[v-cloak] {
		/* Hide un-compiled mustache bindings until the Vue instance is ready */
		display: none;
}

* {
		box-sizing: border-box;
}

a,
a:visited,
a:hover {
	color: #389dc1;
	display: block;
	outline: none;
	text-decoration: none;
}

a:hover {
	text-decoration: none;
}
h6{
	font-size: small;
}
.grid-list {
	background-color: #fff;
	color: #5e5b64;
	font: 17px/1.3, sans-serif;
	margin: 0 auto;
	max-width:auto;
	min-width: auto;
	padding: 30px;
	text-align:center;
}

#bar {
	background-color: #D9D9D9;

}
#bar2{
	display: inline-block;
	height: 32px;
	margin-right: 5px;
	width: 32px;
	background-size: contain;
}


/* The tool bar */
.bar-left {
	background-color: #D9D9D9;
	padding: 10px;
	text-align: left;

}

.bar-left h6{
	font-weight: bold;
}

.tool-bar {
	line-height: 1;
	margin: 0 auto;
	padding: 10px;
	position: relative;
	text-align: right;
	width: 100%;
}

.tool-bar a  {

}

.tool-bar a:hover {
	background-color: #D9D9D9;
}

.tool-bar a.active {
	background-color: rgba( 255, 255, 255, 1 );
	opacity: 0.5;
}

.tool-bar a.active:hover {
	cursor: default;
}

.col {
	    margin: auto;
}

.tool-bar a.list-icon {
	background-image: url( "../assets/list.png" );
}

.tool-bar a.grid-icon  {
	background-image: url( "../assets/grid.png" );
}

/* Grid layout */
.grid {
	background-color: #FFF;
	list-style: none;
	margin: 0 auto;
	padding: 20px;
	text-align: left;
	width: 100%;
}

.grid li {
	    display: inline-block;
	position: relative;
	width: 50%;
}
@media only screen and (max-width: 550px) {
.grid li {
	display: block;
	position: relative;
	width: 100%;
}

}

.grid li:after {
	content: "";
	display: block;
	padding-bottom: 52%;
}

.grid li a {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border: 2px solid #fff;
	height: 99%;
	position: absolute;
	width: 98%;
}

.grid li a:hover {
	border: 2px solid #000;
	box-shadow:         inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
	-moz-box-shadow:    inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
	-webkit-box-shadow: inset 0 0 90px -10px rgba( 0, 0, 0, 1 );
}

/* List layout */
.list {
	background-color: #fff;
	list-style: none;
	margin: 0 auto;
	padding: 0;
	text-align: left;
	width: 100%;
}

.list li {
	border-bottom: 1px solid #fff;
	overflow: hidden;
	padding: 20px;
	transition: background 0.2s linear;
}

.list li:hover {
	background-color: #D9D9D9;
}

.list li a {
	display: table;
	width: 100%;
}


.list li img {
	border: none;
	display: table-cell;
	height: 120px;
	vertical-align: middle;
	width: 120px;
}

.list li:hover p {
	color: #C61C1C;
}

.list li p {
	color: #000;
	display: table-cell;
	font-weight: 700;
	vertical-align: middle;
	width: 100%;
	box-sizing: border-box;
	font-size: 20px;
}
.text {
	text-align:left;
}
.role{
	display:flex!important;
}
.text-result{

}

.form-size{
	width: 80px;
}
/* pagination */

.pagination {

    color: #B5B5B7;
}

.pagination ul {
    display: inline-block;
    *display: inline;
    /* IE7 inline-block hack */
    *zoom: 1;
    margin-left: 0;
    color: #ffffff;
    margin-bottom: 0;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.pagination li {
    display: inline;
    color: #B5B5B7;
}

.pagination a {
    float: left;
    padding: 0 14px;
    line-height: 34px;
    color: #B5B5B7;
    text-decoration: none;
    border-left-width: 0;
    margin-right: 0px;
    width: auto;
}

.pagination a:hover,
.pagination .active a {
    background-color: #B5B5B7;
    color: #ffffff;
}

.pagination a:focus {
    background-color: #B5B5B7;
    color: #ffffff;
}


.pagination .active a {
    color: #ffffff;
    cursor: default;
}

.pagination .disabled span,
.pagination .disabled a,
.pagination .disabled a:hover {
    color: #B5B5B7;
    background-color: transparent;
    cursor: default;
}

.pagination li:first-child a {
    border-left-width: 1px;
    -webkit-border-radius: 3px 0 0 3px;
    -moz-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px;
}

.pagination li:last-child a {
    -webkit-border-radius: 0 3px 3px 0;
    -moz-border-radius: 0 3px 3px 0;
    border-radius: 0 3px 3px 0;
}

.pagination-centered {
    text-align: center;
}

.pagination-right {
    text-align: right;
}

.pager {
    margin-left: 0;
    margin-bottom: 18px;
    list-style: none;
    text-align: center;
    color: #dee2e6;
    *zoom: 1;
}

.pager:before,
.pager:after {
    display: table;
    content: "";
}

.pager:after {
    clear: both;
}

.pager li {
    display: inline;
    color: #dee2e6;
}

.pager a {
    display: inline-block;
    padding: 5px 10px;
    color: #dee2e6;
    background-color: #dee2e6;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
}

.pager a:hover {
    text-decoration: none;
    background-color: #B5B5B7;
}

.pager .next a {
    float: right;
}

.pager .previous a {
    float: left;
}

.pager .disabled a,
.pager .disabled a:hover {
    color: #B5B5B7;
}

.page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #FAC813;
    border-color: #FAC813;
}
.page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
    background-color: #dee2e6;
    border-color: #dee2e6;
}
.d-sm-flex {
    display: unset;
    display: unset;
}

/* end */



.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

/* imagens */

#icons {
	width: 25px;
	height: 25px;
	margin-bottom: 5px;
}
.text-aling{
	padding-left: 6px;
	padding-top: 7px;
}
@media only screen and (max-width: 400px) {
	.text-aling {
		display: none;

	}
}
	.button {
		padding-top: 10px;
	}
@media only screen and (max-width: 576px) {
	.button {
		width: auto;
		padding-top: 20px;
		margin: auto;
	}
}

/* end 	line-height: 3.7; */
.margin{
	margin-left: unset;
}







</style>
