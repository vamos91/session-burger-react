import React, { useEffect, useState } from 'react';

const Burger = (props) => {

    const [like, setLike] = useState(0)

    useEffect(() => {
        console.log('naissance composant')
        //http request
    }, [])

    useEffect(() => {
        console.log('composant reloaded - like' + like)
    }, [like])

    useEffect(() => {
        return () => {
            console.log('composant détruit')
        }
    }, [])


    const { burgerName, handleClickParent } = props
   
    const handleClick = () => {
        setLike(like + 1)
    }

    const orderBurger = () => {
        handleClickParent(burgerName)
    }

    return (
        <div>
            <img width={200} src="https://www.biofournil.com/wp-content/uploads/2021/02/BRIOCHE-BIOFOURNIL_web.jpg" alt="" />
            <div className="title">{burgerName}</div>
            <p>Lorem ipsum dolor sit amet.</p>
            <button onClick={() => handleClick()}>Like {like}</button>
            <button onClick={() => orderBurger()}>Commander</button>
        </div>
    );
};

export default Burger;