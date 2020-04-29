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
	rowsGap: {
		type: "number",
		default : 10
	},
	columnsGap: {
		type: "number",
		default : 10
	},
	boxBgColor: {
		type: "string",
		default: "#3a3a3a"
	},
	boxPaddingTypeMobile: {
		type: "string",
		default : "px"
	},
	boxPaddingTypeTablet: {
		type: "string",
		default : "px"
	},
	boxPaddingTypeDesktop: {
		type: "string",
		default : "px"
	},
	vBoxPaddingMobile: {
		type: "number",
		default : 10
	},
	hBoxPaddingMobile: {
		type: "number",
		default : 10
	},
	vBoxPaddingTablet: {
		type: "number",
		default : 10
	},
	hBoxPaddingTablet: {
		type: "number",
		default : 10
	},
	vBoxPaddingDesktop: {
		type: "number",
		default : 10
	},
	hBoxPaddingDesktop: {
		type: "number",
		default : 10
	},
}

export default attributes
