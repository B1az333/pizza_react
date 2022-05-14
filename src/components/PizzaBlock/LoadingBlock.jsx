import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx="140" cy="136" r="135" />
            <rect x="0" y="278" rx="7" ry="7" width="280" height="24" />
            <rect x="0" y="317" rx="7" ry="7" width="280" height="84" />
            <rect x="0" y="412" rx="7" ry="7" width="280" height="44" />
        </ContentLoader>
    );
}

export default LoadingBlock;
