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
	ColorPalette,
	InspectorControls,
	InnerBlocks
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ButtonGroup,
	Button,
	Dashicon,
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
			boxBgColor,
			boxPaddingTypeMobile,
			boxPaddingTypeTablet,
			boxPaddingTypeDesktop,
			vBoxPaddingMobile,
			hBoxPaddingMobile,
			vBoxPaddingTablet,
			hBoxPaddingTablet,
			vBoxPaddingDesktop,
			hBoxPaddingDesktop,
        } = attributes
		var element = document.getElementById( "uagb-style-faq-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const getFaqChildTemplate = memoize( ( faq_count, faq ) => {
			return times( faq_count, n => [ "uagb/faq-child", faq[n] ] )
        } )
		
		const faqGeneralSettings = () => {

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

		const faqStylingSettings = () => {

			return (
				<PanelBody
					title={ __( "Styling" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<h2>{  __( " Box Styling" ) }</h2>

					<p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: boxBgColor }} ></span></span></p>
					<ColorPalette
						value={ boxBgColor }
						onChange={ ( value ) => setAttributes( { boxBgColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<TabPanel className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-inline-margin" activeClass="active-tab"
						tabs={ [
							{
								name: "desktop",
								title: <Dashicon icon="desktop" />,
								className: "uagb-desktop-tab uagb-responsive-tabs",
							},
							{
								name: "tablet",
								title: <Dashicon icon="tablet" />,
								className: "uagb-tablet-tab uagb-responsive-tabs",
							},
							{
								name: "mobile",
								title: <Dashicon icon="smartphone" />,
								className: "uagb-mobile-tab uagb-responsive-tabs",
							},
						] }>
						{
							( tab ) => {
								let tabout

								if ( "mobile" === tab.name ) {
									tabout = (
										<Fragment>
											<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
												<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ boxPaddingTypeMobile === "px" } aria-pressed={ boxPaddingTypeMobile === "px" } onClick={ () => setAttributes( { boxPaddingTypeMobile: "px" } ) }>{ "px" }</Button>
												<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ boxPaddingTypeMobile === "%" } aria-pressed={ boxPaddingTypeMobile === "%" } onClick={ () => setAttributes( { boxPaddingTypeMobile: "%" } ) }>{ "%" }</Button>
											</ButtonGroup>
											<h2>{ __( "Padding" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.vertical_spacing }
												className={ "uagb-margin-control" }
												value={ vBoxPaddingMobile }
												onChange={ ( value ) => setAttributes( { vBoxPaddingMobile: value } ) }
												min={ 0 }
												max={ 100 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.horizontal_spacing }
												className={ "uagb-margin-control" }
												value={ hBoxPaddingMobile }
												onChange={ ( value ) => setAttributes( { hBoxPaddingMobile: value } ) }
												min={ 0 }
												max={ 100 }
												allowReset
											/>
										</Fragment>
									)
								} else if ( "tablet" === tab.name ) {
									tabout = (
										<Fragment>
											<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
												<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ boxPaddingTypeTablet === "px" } aria-pressed={ boxPaddingTypeTablet === "px" } onClick={ () => setAttributes( { boxPaddingTypeTablet: "px" } ) }>{ "px" }</Button>
												<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ boxPaddingTypeTablet === "%" } aria-pressed={ boxPaddingTypeTablet === "%" } onClick={ () => setAttributes( { boxPaddingTypeTablet: "%" } ) }>{ "%" }</Button>
											</ButtonGroup>
											<h2>{ __( "Padding" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.vertical_spacing }
												className={ "uagb-margin-control" }
												value={ vBoxPaddingTablet }
												onChange={ ( value ) => setAttributes( { vBoxPaddingTablet: value } ) }
												min={ 0 }
												max={ 100 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.horizontal_spacing }
												className={ "uagb-margin-control" }
												value={ hBoxPaddingTablet }
												onChange={ ( value ) => setAttributes( { hBoxPaddingTablet: value } ) }
												min={ 0 }
												max={ 100 }
												allowReset
											/>
										</Fragment>
									)
								} else {
									tabout = (
										<Fragment>
											<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
												<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ boxPaddingTypeDesktop === "px" } aria-pressed={ boxPaddingTypeDesktop === "px" } onClick={ () => setAttributes( { boxPaddingTypeDesktop: "px" } ) }>{ "px" }</Button>
												<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ boxPaddingTypeDesktop === "%" } aria-pressed={ boxPaddingTypeDesktop === "%" } onClick={ () => setAttributes( { boxPaddingTypeDesktop: "%" } ) }>{ "%" }</Button>
											</ButtonGroup>
											<h2>{ __( "Padding" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.vertical_spacing }
												className={ "uagb-margin-control" }
												value={ vBoxPaddingDesktop }
												onChange={ ( value ) => setAttributes( { vBoxPaddingDesktop: value } ) }
												min={ 0 }
												max={ 100 }
												allowReset
											/>
											<RangeControl
												label={ UAGB_Block_Icons.horizontal_spacing }
												className={ "uagb-margin-control" }
												value={ hBoxPaddingDesktop }
												onChange={ ( value ) => setAttributes( { hBoxPaddingDesktop: value } ) }
												min={ 0 }
												max={ 100 }
												allowReset
											/>
										</Fragment>
									)
								}

								return <div>{ tabout }</div>
							}
						}
					</TabPanel>
				</PanelBody>
			)
		}

		return (
			<Fragment>
				<InspectorControls>
					{ faqGeneralSettings() }
					{ faqStylingSettings() }
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
