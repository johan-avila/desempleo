import React from 'react';
import MetaTags from 'react-meta-tags';

class HeadMeta extends React.Component {
    render() {
        return (
            <MetaTags>
                <title></title>
                <meta name="description" content="Some description." />
                <meta property="og:title" content="MyApp" />
                <meta property="og:image" content="path/to/image.jpg" />
            </MetaTags>
        )
    }
}
export default HeadMeta