/**
 * BLOCK: FAQ
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

const ALLOWED_BLOCKS = [ "uagb/faq-child" ]
class UAGBFaqEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-faq-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	render() {

		const { attributes, setAttributes } = this.props
        const {
            faq,
			faq_count,
			layout,
			inactiveOtherItems,
			expandFirstItem,
			enableSchemaSupport,
			rowsGap,
			columnsGap,
			align,
			enableSeparator,
        } = attributes
		var element = document.getElementById( "uagb-style-faq-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const getFaqChildTemplate = memoize( ( faq_count, faq ) => {
			return times( faq_count, n => [ "uagb/faq-child", faq[n] ] )
        } )
		
		const faqControls = () => {

			return (
				<PanelBody
					title={ __( "General Settings" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<SelectControl
						label={ __( "Layout" ) }
						value={ layout }
						options={ [
							{ value: "accordion", label: __( "Accordion" ) },
							{ value: "grid", label: __( "Grid" ) },
						] }
						onChange={ ( value ) => setAttributes( { layout: value } ) }
					/>
					<SelectControl
						label={ __( "Inactive other items" ) }
						value={ inactiveOtherItems }
						options={ [
							{ value: "yes", label: __( "Yes" ) },
							{ value: "no", label: __( "No" ) },
						] }
						onChange={ ( value ) => setAttributes( { inactiveOtherItems: value } ) }
					/>
					<SelectControl
						label={ __( "Expand First Item" ) }
						value={ expandFirstItem }
						options={ [
							{ value: "yes", label: __( "Yes" ) },
							{ value: "no", label: __( "No" ) },
						] }
						onChange={ ( value ) => setAttributes( { expandFirstItem: value } ) }
					/>
					<SelectControl
						label={ __( "Enable Schema Support" ) }
						value={ enableSchemaSupport }
						options={ [
							{ value: "yes", label: __( "Yes" ) },
							{ value: "no", label: __( "No" ) },
						] }
						onChange={ ( value ) => setAttributes( { enableSchemaSupport: value } ) }
					/>
					<RangeControl
						label={ __( "Rows Gap" ) }
						value={ rowsGap }
						onChange={ ( value ) => setAttributes( { rowsGap: value } ) }
						min={ 0 }
						max={ 50 }
					/>
					<RangeControl
						label={ __( "Columns Gap" ) }
						value={ columnsGap }
						onChange={ ( value ) => setAttributes( { columnsGap: value } ) }
						min={ 0 }
						max={ 50 }
					/>
					<SelectControl
						label={ __( "Alignment" ) }
						value={ align }
						options={ [
							{ value: "left", label: __( "Left" ) },
							{ value: "right", label: __( "Right" ) },
							{ value: "center", label: __( "Center" ) },
						] }
						onChange={ ( value ) => setAttributes( { align: value } ) }
					/>
					<SelectControl
						label={ __( "Enable Separator" ) }
						value={ enableSeparator }
						options={ [
							{ value: "yes", label: __( "Yes" ) },
							{ value: "no", label: __( "No" ) },
						] }
						onChange={ ( value ) => setAttributes( { enableSeparator: value } ) }
					/>
				</PanelBody>
			)
		}

		return (
			<Fragment>
				<InspectorControls>
					{ faqControls }
				</InspectorControls>

				<div className={ classnames(
					"uagb-faq__outer-wrap",
					`uagb-block-${ this.props.clientId }`
				) }
				>
                    <InnerBlocks
                        template={ getFaqChildTemplate( faq_count, faq ) }
                        templateLock={ false }
                        allowedBlocks={ ALLOWED_BLOCKS }
                        __experimentalMoverDirection={ 'vertical' }
                    />
				</div>
			</Fragment>
		)
	}
}

export default UAGBFaqEdit
