import React, { useState, useEffect } from 'react';


export const AddJobInfo = (props) => {
    return <input value={props.name} onChange={e => props.setName(e.target.value)} className='resume_input' />
}

export const ListJobInfo = (props) => {
    return (
        <>
            {props.infos.map(item => (
                <div key={item} style={{ display: 'flex' }}>
                    <p style={{ margin: '0' }}>{item}</p>
                    <button onClick={() => props.removeInfo(item)} className='job_info_remove'>x</button>
                </div>
            ))}
        </>
    )
}

export const InputListJobInfo = (props) => {
    const [mat, setMat] = useState([])
    useEffect(() => {
        setMat(props.materials.map(item => [item.name, 1]))
    }, [props.materials])
    function handleAdd(select, count, name) {
        if (select && count > 0) {
            props.setMaterials(props.materials.filter(item => {
                if (item.name === name) {
                    item.data.push({ [select]: count })
                }
            }))
        }
    }
    function handleRemove(select, count, name) {
        if (select && count > 0) {
            let arr = props.materials.filter(item => {
                if (item.name === name)
                    return item.data
            })
            arr[0].data.splice(arr[0].data.findIndex(i => i[select]), 1)
            props.setMaterials(arr)
        }

    }
    function handleAddMaterials(name) {
        setMat(mat.filter(item => {
            if (item[0] === name)
                return item[1] += 1
        }))
    }
    return (
        <>
            {mat.map(item => {
                return (
                    <div key={item[0]}>
                        <div style={{ display: 'flex' }}>
                            <p>{item[0]}</p>
                            <button onClick={() => handleAddMaterials(item[0])}
                                style={{
                                    width: '25px', height: '25px',
                                    alignSelf: 'center', marginLeft: '20px'
                                }}>+</button>
                        </div>
                        {[...Array(item[1])].map((x, i) => {
                            return (
                                <AddMaterials key={i} products={props.products} add={handleAdd} remove={handleRemove} name={item[0]} />
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}

export const AddMaterials = (props) => {
    const [select, setSelect] = useState('')
    const [number, setNumber] = useState(0)
    return (
        <div>
            <select value={select} onChange={e => setSelect(e.target.value)}
                style={{ margin: '15px 0' }}>
                <option hidden>Выберите продукт...</option>
                {props.products.map(item => (
                    <option key={item.name} value={item.name}>{item.name}</option>
                ))}
            </select>
            <input value={number} onChange={e => setNumber(e.target.value)} type="number" />
            <button onClick={() => props.add(select, number, props.name)}>+</button>
            <button onClick={() => props.remove(select, number, props.name)}>-</button>
        </div>
    )
}