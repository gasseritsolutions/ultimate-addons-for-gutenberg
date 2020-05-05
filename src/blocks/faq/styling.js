/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {
    
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
        hquestionPaddingMobile,
        hquestionPaddingTablet,
        hquestionPaddingDesktop,
        answerTextColor,
        answerPaddingTypeMobile,
        answerPaddingTypeTablet,
        answerPaddingTypeDesktop,
        vanswerPaddingMobile,
        vanswerPaddingTablet,
        vanswerPaddingDesktop,
        hanswerPaddingMobile,
        hanswerPaddingTablet,
        hanswerPaddingDesktop,
        iconColor,
        iconActiveColor,
        gapBtwIconQUestion,
        questionloadGoogleFonts,
        questionfontFamily,
        questionfontWeight,
        questionfontSubset,
        questionfontSizeType,
        questionfontSize,
        questionfontSizeMobile,
        questionfontSizeTablet,
        questionlineHeightType,
        questionlineHeight,
        questionlineHeightMobile,
        questionlineHeightTablet,
        answerloadGoogleFonts,
        answerfontFamily,
        answerfontWeight,
        answerfontSubset,
        answerfontSizeType,
        answerfontSize,
        answerfontSizeMobile,
        answerfontSizeTablet,
        answerlineHeightType,
        answerlineHeight,
        answerlineHeightMobile,
        answerlineHeightTablet,
        icon,
        iconActive,
        iconAlign,
        iconSize
    } = props.attributes

    var selectors = {

		" .uag-icon svg" : {
            "width" : generateCSSUnit( iconSize, 'px' ),
            "height" : generateCSSUnit( iconSize, 'px' ),
            "font-size" : generateCSSUnit( iconSize, 'px' )
		},
	}
    var styling_css = '';
    var id = `.uagb-block-${ props.clientId }`
    styling_css = generateCSS( selectors, id )

	return styling_css
}

export default styling
