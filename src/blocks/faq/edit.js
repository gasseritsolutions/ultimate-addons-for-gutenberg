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
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			questionTextColor,
			questionTextActiveColor,
			questionPaddingTypeMobile,
			questionPaddingTypeTablet,
			questionPaddingTypeDesktop,
			vquestionPaddingMobile,
			vquestionPaddingTablet,
			vquestionPaddingDesktop,
			answerTextColor,
			answerPaddingTypeMobile,
			answerPaddingTypeTablet,
			answerPaddingTypeDesktop,
			vanswerPaddingMobile,
			vanswerPaddingTablet,
			vanswerPaddingDesktop,
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
					<hr className="uagb-editor__separator" />
					<h2>{  __( " Box Styling" ) }</h2>
					<hr className="uagb-editor__separator" />
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
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Border" ) }</h2>
					<SelectControl
						label={ __( "Style" ) }
						value={ borderStyle }
						options={ [
							{ value: "none", label: __( "None" ) },
							{ value: "solid", label: __( "Solid" ) },
							{ value: "dotted", label: __( "Dotted" ) },
							{ value: "dashed", label: __( "Dashed" ) },
							{ value: "double", label: __( "Double" ) },
						] }
						onChange={ value => {
							setAttributes( { borderStyle: value } )
						} }
					/>
					{ "none" !== borderStyle &&
						<RangeControl
							label={ __( "Thickness" ) }
							value={ borderWidth }
							onChange={ value => {
								setAttributes( { borderWidth: value } )
							} }
							min={ 0 }
							max={ 20 }
						/>
					}
					{ "none" !== borderStyle &&
						<RangeControl
							label={ __( "Rounded Corners" ) }
							value={ borderRadius }
							onChange={ value => {
								setAttributes( { borderRadius: value } )
							} }
							min={ 0 }
							max={ 50 }
						/>
					}
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: borderColor }} ></span></span></p>
					<ColorPalette
						value={ borderColor }
						onChange={ ( value ) => setAttributes( { borderColor: value } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<h2>{  __( " Questions Styling" ) }</h2>
				
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Question Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: questionTextColor }} ></span></span></p>
					<ColorPalette
						value={ questionTextColor }
						onChange={ ( value ) => setAttributes( { questionTextColor: value } ) }
						allowReset
					/>
					<p className="uagb-setting-label">{ __( "Question Text Active/Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: questionTextActiveColor }} ></span></span></p>
					<ColorPalette
						value={ questionTextActiveColor }
						onChange={ ( value ) => setAttributes( { questionTextActiveColor: value } ) }
						allowReset
					/>
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
												<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ questionPaddingTypeMobile === "px" } aria-pressed={ questionPaddingTypeMobile === "px" } onClick={ () => setAttributes( { questionPaddingTypeMobile: "px" } ) }>{ "px" }</Button>
												<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ questionPaddingTypeMobile === "%" } aria-pressed={ questionPaddingTypeMobile === "%" } onClick={ () => setAttributes( { questionPaddingTypeMobile: "%" } ) }>{ "%" }</Button>
											</ButtonGroup>
											<h2>{ __( "Padding" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.vertical_spacing }
												className={ "uagb-margin-control" }
												value={ vquestionPaddingMobile }
												onChange={ ( value ) => setAttributes( { vquestionPaddingMobile: value } ) }
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
												<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ questionPaddingTypeTablet === "px" } aria-pressed={ questionPaddingTypeTablet === "px" } onClick={ () => setAttributes( { questionPaddingTypeTablet: "px" } ) }>{ "px" }</Button>
												<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ questionPaddingTypeTablet === "%" } aria-pressed={ questionPaddingTypeTablet === "%" } onClick={ () => setAttributes( { questionPaddingTypeTablet: "%" } ) }>{ "%" }</Button>
											</ButtonGroup>
											<h2>{ __( "Padding" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.vertical_spacing }
												className={ "uagb-margin-control" }
												value={ vquestionPaddingTablet }
												onChange={ ( value ) => setAttributes( { vquestionPaddingTablet: value } ) }
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
												<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ questionPaddingTypeDesktop === "px" } aria-pressed={ questionPaddingTypeDesktop === "px" } onClick={ () => setAttributes( { questionPaddingTypeDesktop: "px" } ) }>{ "px" }</Button>
												<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ questionPaddingTypeDesktop === "%" } aria-pressed={ questionPaddingTypeDesktop === "%" } onClick={ () => setAttributes( { questionPaddingTypeDesktop: "%" } ) }>{ "%" }</Button>
											</ButtonGroup>
											<h2>{ __( "Padding" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.vertical_spacing }
												className={ "uagb-margin-control" }
												value={ vquestionPaddingDesktop }
												onChange={ ( value ) => setAttributes( { vquestionPaddingDesktop: value } ) }
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
					<hr className="uagb-editor__separator" />
					<h2>{  __( " Answer Styling" ) }</h2>
				
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Answer Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: answerTextColor }} ></span></span></p>
					<ColorPalette
						value={ answerTextColor }
						onChange={ ( value ) => setAttributes( { answerTextColor: value } ) }
						allowReset
					/>
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
												<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ answerPaddingTypeMobile === "px" } aria-pressed={ answerPaddingTypeMobile === "px" } onClick={ () => setAttributes( { answerPaddingTypeMobile: "px" } ) }>{ "px" }</Button>
												<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ answerPaddingTypeMobile === "%" } aria-pressed={ answerPaddingTypeMobile === "%" } onClick={ () => setAttributes( { answerPaddingTypeMobile: "%" } ) }>{ "%" }</Button>
											</ButtonGroup>
											<h2>{ __( "Padding" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.vertical_spacing }
												className={ "uagb-margin-control" }
												value={ vanswerPaddingMobile }
												onChange={ ( value ) => setAttributes( { vanswerPaddingMobile: value } ) }
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
												<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ answerPaddingTypeTablet === "px" } aria-pressed={ answerPaddingTypeTablet === "px" } onClick={ () => setAttributes( { answerPaddingTypeTablet: "px" } ) }>{ "px" }</Button>
												<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ answerPaddingTypeTablet === "%" } aria-pressed={ answerPaddingTypeTablet === "%" } onClick={ () => setAttributes( { answerPaddingTypeTablet: "%" } ) }>{ "%" }</Button>
											</ButtonGroup>
											<h2>{ __( "Padding" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.vertical_spacing }
												className={ "uagb-margin-control" }
												value={ vanswerPaddingTablet }
												onChange={ ( value ) => setAttributes( { vanswerPaddingTablet: value } ) }
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
												<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ answerPaddingTypeDesktop === "px" } aria-pressed={ answerPaddingTypeDesktop === "px" } onClick={ () => setAttributes( { answerPaddingTypeDesktop: "px" } ) }>{ "px" }</Button>
												<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ answerPaddingTypeDesktop === "%" } aria-pressed={ answerPaddingTypeDesktop === "%" } onClick={ () => setAttributes( { answerPaddingTypeDesktop: "%" } ) }>{ "%" }</Button>
											</ButtonGroup>
											<h2>{ __( "Padding" ) }</h2>
											<RangeControl
												label={ UAGB_Block_Icons.vertical_spacing }
												className={ "uagb-margin-control" }
												value={ vanswerPaddingDesktop }
												onChange={ ( value ) => setAttributes( { vanswerPaddingDesktop: value } ) }
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
