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
const { select } = wp.data;
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
	TextControl,
	TextareaControl
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

		const parentClientId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( this.props.clientId );
		const parentAttributes = select('core/block-editor').getBlockAttributes( parentClientId );
	}

	render() {

		const { attributes, setAttributes } = this.props
        const {
			block_id,
			question,
			answer
        } = attributes
		var element = document.getElementById( "uagb-style-faq-child" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const faqChildControls = () => {

			return (
				<PanelBody
					title={ __( "General Settings" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<TextControl
						label="Title"
						value={ question }
						onChange={ ( question ) => setAttributes( { question: question } ) }
					/>
					<TextareaControl
						label="Content"
						value={ answer }
						onChange={ ( answer ) => setAttributes( { answer: answer } ) }
					/>
				</PanelBody>
			)
		}
		const faqRenderAccordion = () => {

			return (

				<div className="uagb-faq-child__wrapper">
					<div className="uagb-faq-child-repeater">
						<div className="uag-faq-layout">
							<div className="uag-title" aria-expanded="false">                    
								<span className="uag-icon uag-icon-right">
									<span className="uag-icon-closed"><i className="fas fa-angle-right"></i></span>
									<span className="uag-icon-opened"><i className="fas fa-angle-up"></i></span>
								</span>
								<span className="uag-question uag-question-span">
									{ question }
								</span>
							</div>
							<div className="uag-content">
								<span>
									<p>
										{ answer }
									</p>
								</span>
							</div>
						</div>
					</div>
                </div>
			)
		}
		return (
			<Fragment>
				<InspectorControls>
					{ faqChildControls }
				</InspectorControls>
                <div className={ classnames(
                        "uagb-faq-child__outer-wrap",
                        `uagb-block-${ block_id }`
                    ) }
                >
                    
                </div>
			</Fragment>
		)
	}
}

export default UAGBFaqChildEdit
