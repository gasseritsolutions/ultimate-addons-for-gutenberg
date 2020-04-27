/**
 * BLOCK: FAQ - Child
 */

import classnames from "classnames"
import times from "lodash/times"
import map from "lodash/map"
import styling from "./styling"
import memoize from "memize"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	InnerBlocks
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl
} = wp.components

class UAGBFaqChildEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-faq-child" + this.props.clientId )
		document.head.appendChild( $style )
	}

	render() {

		const { attributes, setAttributes } = this.props
        const {
            block_id
        } = attributes
		var element = document.getElementById( "uagb-style-faq-child" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		return (
			<Fragment>
                <div className={ classnames(
                        "uagb-faq-child__outer-wrap",
                        `uagb-block-${ block_id }`
                    ) }
                >
                    <div className="uagb-faq-child__wrapper">
                        <div className="uagb-faq-child-repeater">

                        </div>
                    </div>
                </div>
			</Fragment>
		)
	}
}

export default UAGBFaqChildEdit
