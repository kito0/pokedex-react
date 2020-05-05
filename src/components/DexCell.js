import React from 'react';
import sprites from '../assets/sprites.png'
import './styles/DexCell.css';

const DexCell = ({dexClass}) => {
    const { id, backgroundPosition } = dexClass;
    const style = { backgroundImage: 'url($(sprites))', backgroundPosition };

    return <button style={style} className="dex-cell">
        
    </button>
};

export default DexCell;