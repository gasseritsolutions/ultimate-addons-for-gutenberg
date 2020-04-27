/**
 * BLOCK: FAQ - Save Block
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
			"uagb-faq__outer-wrap",
			`uagb-block-${ block_id }`
		) }
		>
			<div className="uagb-faq__wrap uagb-buttons-layout-wrap">
				<InnerBlocks.Content />
			</div>
		</div>
	)
}
