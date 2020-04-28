const ITEM_COUNT = 2	

const faq = []	

for ( var i = 1; i <= ITEM_COUNT; i++ ) {		
	faq.push(	
		{	
			"question": 'What is FAQ?',	
			"answer": 'This is FAQ!',	
		}	
	)	
}

const attributes = {
	block_id: {
		type: "string"
	},
	faq_count: {	
		type: "number",	
		default: ITEM_COUNT	
	},	
	faq: {	
		type: "array",	
		default : faq,	
	},
}

export default attributes
