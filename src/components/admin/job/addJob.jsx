import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AddJobInfo, InputListJobInfo, ListJobInfo } from './jobInfo';

const infoData = {
	"data": {
		"name": "",
		"info": "",
		"materials": []
	}
}

export const AddJob = () => {
	const textareaRef = useRef(null);
	const products = useSelector(state => state.admin.products)
	const [name, setName] = useState('')
	const [infos, setInfos] = useState([])
	const [info, setInfo] = useState('')
	const [selectType, setSelectType] = useState('')
	const [selectProduct, setSelectProduct] = useState('')
	const [data, setData] = useState({})
	const [materials, setMaterials] = useState([])

	const dispatch = useDispatch()

	useEffect(() => {
		infoData.data.info = infos.join(',')
		setData(infoData)
	}, [infos, materials])

	useEffect(() => {
		setData(JSON.stringify(infoData, undefined, 4))
		textareaRef.current.style.height = "0px";
		const scrollHeight = textareaRef.current.scrollHeight;
		textareaRef.current.style.height = scrollHeight + "px";
	}, [data])

	function handleSubmit() {
	}

	function handleChangeName(val) {
		setName(val)
		if (selectType) {
			infoData.data.name = val + ', ' + selectType
		} else {
			infoData.data.name = val
		}
		setData(infoData)
	}

	const handleAddInfo = () => {
		if (info) {
			setInfos(state => ([...state, info]))
			setMaterials(state => [...state, {name: info, data: []}])
			setInfo('')
		}
	}
	const handleRemoveInfo = (name) => {
		setInfos(infos.filter((prev) => prev !== name))
		setMaterials(materials.filter((prev) => prev.name !== name))
	}
	const handleSelectType = (val) => {
		setSelectType(val)
		infoData.data.name = name + ', ' + val
		setData(infoData)
	}
	const handleSelectProduct = (val) => {
		let last = selectProduct
		setSelectProduct(val)
		if (!last || infoData.data.materials.length == 0) {
			infoData.data.materials.push({ name: val, type: selectType })
		} else {
			infoData.data.materials[0]['name'] = val
		}
		setData(infoData)
	}
	const handleInfosCount = (val) => {

	}

	return (
		<div className='stockResume'>
			<div className="container">
				<div className="resume_container">
					<h2 className='add_title'>Добавление работы</h2>
					<div className="row">
						<div className="col">
							<form className='add_form' onSubmit={e => {
								e.preventDefault()
								handleSubmit()
							}}>
								<input type="text" placeholder='Введите название' value={name}
									onChange={e => handleChangeName(e.target.value)} className='resume_input' />
								{name || selectType ?
									<select value={selectType} onChange={e => handleSelectType(e.target.value)}>
										<option hidden>Выберите тип...</option>
										<option value="Формовка">Формовка</option>
										<option value="Покраска">Покраска</option>
										<option value="Сборка">Сборка</option>
									</select> : ''}
								{selectType || selectProduct ? 
								<select value={selectProduct} onChange={e => handleSelectProduct(e.target.value)}
									style={{margin: '15px 0'}}>
									<option hidden>Выберите продукт...</option>
									{products.map(item => (
										<option key={item.name} value={item.name}>{item.name}</option>
									))}
								</select> : ''}
								<p style={{ margin: '0' }}>Информация: </p>
								<div style={{ width: '85%', display: 'flex', flexDirection: 'column' }}>
									<div>
										<AddJobInfo name={info} setName={setInfo} />
										<button onClick={e => handleAddInfo(e)} className='job_info_add'>+</button>
									</div>
									<ListJobInfo infos={infos} removeInfo={handleRemoveInfo} />
								</div>
								<InputListJobInfo materials={materials} setMaterials={setMaterials} products={products}/>
								<div className="link resume_stock_link">
									<button type='submit' className="resume_stock_submit">Создать</button>
								</div>
							</form>
						</div>
						<div className="col">
							<textarea ref={textareaRef} value={data}
								style={{ marginRight: '10px', resize: 'none' }}
								readOnly cols="30" rows="10"></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

