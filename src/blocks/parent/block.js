/**
 * BLOCK: Advanced Heading
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

const {
	Fragment,
} = wp.element

const {
	InnerBlocks
} = wp.blockEditor

const ALLOWED_BLOCKS = [ "uagb/child1" ]

const TEMPLATE1 = [
	[ 'uagb/child1', { type: 'tool', text: 'tool' }, ]
];

const TEMPLATE2 = [
	[ 'uagb/child1', { type: 'material', text: 'material' } ]
];

const TEMPLATE3 = [
	[ 'uagb/child1', { type: 'step', text: 'step' } ]
];

registerBlockType( "uagb/parent", {

	title: "Parent",
	description: "Parent",
	icon: UAGB_Block_Icons.advanced_heading,
	keywords: [
		__( "parent" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes: {},
	edit: () => {
		return (
			<Fragment>
				<InnerBlocks templateLock={ false } allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE1 } />
				<InnerBlocks templateLock={ false } allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE2 } />
				<InnerBlocks templateLock={ false } allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE3 } />
			</Fragment>
		)
	},
	save: ( props ) => {
		return null;
	}
} )