import React from 'react';
import DexCell from './DexCell';
import { dexClasses } from '../dexClasses';
import './styles/DexList.css';

const DexList = () => {
    const cells = dexClasses.map(dexClass => {
        return (
            <DexCell>
                key={dexClass.id}
                dexClass={dexClass}
            </DexCell>
        );
    });

    return (
        <section className="dex-list">
            {cells}
        </section>
    )
}

export default DexList;