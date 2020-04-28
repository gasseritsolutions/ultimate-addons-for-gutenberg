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
	inactiveOtherItems: {
		type: "string",
		default : "yes"
	},
	expandFirstItem: {
		type: "string",
		default : "yes"
	},
	enableSchemaSupport: {
		type: "string",
		default : "no"
	},
	align: {
		type: "string",
		default : "left"
	},
	enableSeparator: {
		type: "string",
		default : "no"
	},
	enableSeparator: {
		type: "number",
		default : 10
	},
}
,
			,
			,
			rowsGap,
			columnsGap,
			align,
			,
export default attributes
