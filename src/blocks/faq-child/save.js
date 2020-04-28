/**
 * BLOCK: FAQ - Child - Save Block
 */

import classnames from "classnames"

const {
	InnerBlocks
} = wp.blockEditor

export default function save( props ) {
	
	const { className } = props
	const {
		block_id
	} = props.attributes

	return (
		<div className={ classnames(
			className,
			"uagb-faq-child__outer-wrap",
			`uagb-block-${ block_id }`
		) }
		>
			<div className="uagb-faq-child__wrapper">
                <div className="uagb-faq-child-repeater">
                    
                </div>
			</div>
		</div>
	)
}
