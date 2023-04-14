import React, { useState, useEffect } from 'react';
import './styles.css';
const generateAvatar = (porPage, num) => {
    const avatar = [];
    for (let i = 0; i < porPage; i++) {
        avatar.push(`https://avatars.dicebear.com/api/bottts/stefan${num}.svg`);
        num = parseInt(num) + parseInt( porPage);
        console.log(num);
    }
    return avatar;
}
const List = props => {
    const { clickHandler } = props;
    const [list, setList] = useState([]);
    const [porPage, setPorPage] = useState(0);
    const [num, setNum] = useState(1);

    //setList(generateAvatar());
    useEffect(() => {
        setList(generateAvatar(porPage, num));
        setNum(parseInt(num+1)+  parseInt(porPage));
        console.log("efect " + num)
    }, [porPage]);

    const nextPage = () => {
        setNum(parseInt(num+1)+  parseInt(porPage));
        console.log("antes"+num)
        setList(generateAvatar(porPage, parseInt(num+1)));
        console.log("next"+ num);

    }
    const prevPage = () => {
        console.log("prev"+num);
        setNum(parseInt(num-1) -  parseInt(porPage));
        setNum(parseInt(num-1) -  parseInt(porPage));
        setList(generateAvatar(porPage, parseInt(num-porPage)));
        
    }

    return <div className='wrapper'>
        <h2>List</h2>
        <ul>
            {list.map((item, index) => (
                <li key={index} onClick={() => {
                    clickHandler(item);
                }}>
                    <img src={item} />
                </li>
            ))}
        </ul>
        <form onSubmit={ev => {
            ev.preventDefault();
            setPorPage(ev.target.porPage.value);
        }}>
            <div className='pag'>
                <div>
                    <button onClick={prevPage}>◀</button>
                </div>
                <div>
                    <input type="text" name="porPage" autoComplete="off" placeholder="Cantidad de robots" />
                </div>
                <div>
                    <button onClick={nextPage}>▶</button>
                </div>

            </div>

        </form>


    </div>
}
export default List;