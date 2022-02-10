import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CalcComponent extends Component {
	
	@tracked amount;

	@tracked pcent = 0;

	@tracked persons;
	
	@tracked customp;

	@tracked totaltip = 0;

	@tracked total = 0;

	@tracked totalbyp = (Math.round(0* 100) / 100).toFixed(2);

	@tracked tipbyp = (Math.round(0* 100) / 100).toFixed(2);
	
	get ZeroPers(){
		if (this.persons <= 0){
			
			return 'ZeroPers'
		
		}
	}


	@action
	reset () {
		this.amount = '';
		this.total = 0;
		this.totaltip = 0;
		this.totalbyp = (Math.round(0 * 100) / 100).toFixed(2);
		this.persons = '';
		this.tipbyp = (Math.round(0 * 100) / 100).toFixed(2);
		this.customp = '';
	}
	
	@action
	getpourcentage (p){
		this.pcent = p / 100;
	}

	@action
	pourcentage () {
		
		if(this.persons > 0) {
		 this.total = this.amount * (1+this.pcent);
		 this.total = Math.round(this.total * 100) / 100;
		 
		 this.totaltip = this.amount * this.pcent;
		 this.totaltip = Math.round(this.totaltip * 100) / 100;

		 this.totalbyp = this.total / this.persons;
		 this.totalbyp = Math.round(this.totalbyp * 100) / 100;
	
		 this.tipbyp = this.totaltip/ this.persons;
		 this.tipbyp = Math.round(this.tipbyp * 100) / 100;

		}
		
		 
       	}
}
