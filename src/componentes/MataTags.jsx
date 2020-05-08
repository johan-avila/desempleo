import React from 'react';
import MetaTags from 'react-meta-tags';

class HeadMeta extends React.Component {
    render() {
        return (
            <MetaTags>
                <title>{this.props.MetapageTitle}</title>
                <meta name="description" content="Some description." />
              
            </MetaTags>
        )
    }
}
export default HeadMeta