const attributes = {
	block_id: {
		type: "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	align: {
		type: "string",
		default: "center"
	},
	btn_count: {
		type: "number",
		default: ITEM_COUNT
	},
	buttons: {
		type: "array",
		default : buttons,
	},
	gap: {
		type: "number",
		default: 10
	},
	stack: {
		type: "string",
		default: "none"
	},
	loadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	fontFamily: {
		type: "string",
		default: "Default",
	},
	fontWeight: {
		type: "string",
	},
	fontSubset: {
		type: "string",
	},
}

export default attributes