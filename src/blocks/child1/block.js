/**
 * BLOCK: Advanced Heading
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
//import "./style.scss"

const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

const {
	RichText
} = wp.blockEditor

const {
	Fragment,
} = wp.element

const {
	InspectorControls
} = wp.blockEditor

const {
	PanelBody
} = wp.components


registerBlockType( "uagb/child1", {

	title: "Child 1",
	description: "Child 1",
	icon: UAGB_Block_Icons.advanced_heading,
	keywords: [
		__( "child" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	parent: [ "uagb/parent" ],
	category: uagb_blocks_info.category,
	attributes: {
		text: {
			source: "html",
			selector: "p",
			default: "",
		},
		type: {
			type: "string",
			default: "tool"
		}
	},
	edit: ( props ) => {
		const { text, type } = props.attributes
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ type } initialOpen={ true }>
						{type}
					</PanelBody>
				</InspectorControls>
				<RichText
					tagName={ 'div' }
					placeholder={ __( "Write a text" ) }
					value={ text }
					className='uagb-child-text'
					onChange={ ( value ) => {
						setAttributes( { text: value } ) }
					}
				/>
			</Fragment>
		)
	},
	save: ( props ) => {
		return null;
	}
} )