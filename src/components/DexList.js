import React from 'react';
import DexCell from './DexCell';
import { dexClasses } from '../dexClasses';
import './styles/DexList.css';

const DexList = ({ handleOnClick }) => {
    const cells = dexClasses.map(dexClass => {
        return (
            <DexCell
                key={dexClass.id}
                dexClass={dexClass}
                handleOnClick={handleOnClick}
            />
        );
    });

    return (
        <section className="dex-list">
            {cells}
        </section>
    )
}

export default DexList;