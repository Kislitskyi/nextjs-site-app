import React from 'react'
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const PostModal = (props) => {

    const reset = (e) => {
        props.handleClick(e);
    }
    

    return (
        <>
            {
                props.showModal == "open" && (

                    <Container>
                        <Content>
                            <Header>
                                <div>
                                    <h1>Project<span>FS</span></h1>
                                    <h2>Залишити заявку</h2>
                                    <p>При передзвонимо вам у найблищий вільний час</p>
                                </div>
                                <IconButton onClick={(event) => reset(event)} className="button">
                                    <Close className='crossClose' />
                                </IconButton>
                            </Header>
                            <Body>
                                <InputContainer>
                                    <Input placeholder='Прізвище'/>
                                    <Input placeholder='Імʼя'/>
                                    <Input placeholder='email' title="example@gmail.com"/>
                                    <Input placeholder='Номер телефону'/>
                                    <Input placeholder='Введіть тип сайту' title="Односторінковий | Багатосторінковий | Продвинутий | Магазин"/>
                                    <textarea placeholder='Коментар'></textarea>
                                    <button>Надіслати</button>
                                </InputContainer>
                                <Info>
                                    <p>
                                        Залишіть заявку або зв’яжіться з нами будь-яким зручним для Вас способом.
                                    </p>
                                    <Phones>
                                        <p>Phone placeholder</p>
                                        <p>
                                            <img src="./telega.webp" alt="" />
                                            @social network
                                        </p>
                                        <p>Email placeholder</p>
                                        <p>Пн-Пт: 8.00-20.00 <br /> Сб-Вс: 9.00-21.00</p>
                                        <p>Примітка: Натискаючи кнопку «Надіслати», ви даєте згоду на обробку ваших персональних даних відповідно до умов «Політики конфіденційності».</p>
                                    </Phones>
                                </Info>
                            </Body>
                        </Content>
                    </Container>
                )
            }
        </>
    )
}

export default PostModal;

const Container = styled.div`
    font-weight: 600;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: #000;
    background-color: rgba(0, 0, 0, .8);
    animation: fadeIn 0.4s;
`;

const Content = styled.div`
    width: 100%;
    max-width: 740px;
    background-color: #fff;
    height: 90%;
    max-height: 90%;
    overflow: initial;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
    padding: 20px 40px;
    @media (max-width: 655px) {
        height: 100%;
        max-height: 100%;
        top: 0;
        border-radius: 0;
    }
`;

const Header = styled.div`
    font-family: 'EUkraineHead';
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .button {
        position: absolute;
        top: 0px;
        right: 0px;
        border: none;
        outline: none;
        background: transparent;
        margin-bottom: 100px;
        :hover {
            cursor: pointer;
        }
    }
    > div {
        flex: 1;
        text-align: center;
        > img {
            width: 200px;
            margin-top: 20px;
        }
        > h2 {
            color: #0095d2;
            font-weight: 900;
        }
        > p{
            font-weight: 900;
        }
        > h1{
            font-family: 'EUkraineLogo';
            color: #00658f;
        >span{
            color: #e6b944;
        }
    }
    }
`;

const Body = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 655px) {
        flex-direction: column;
        overflow-y: scroll;
    }
`;

const InputContainer = styled.div`
    flex: 0.5;
    display: flex;
    color: #000;
    flex-direction: column;
    > textarea {
        resize: none;
        height: 100px;
        /* border: 2px solid #0095d2; */
        border: none;
        background-color: whitesmoke;
        border-radius: 3px;
        padding: 15px 20px;
        color: #000;
        font-size: 16px;
    }
    > button {
        background-color: #0095d2;
        padding: 10px 15px;
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        border: none;
        outline: none;
        margin-top: 25px;
        width: fit-content;
        :hover {
            cursor: pointer;
        }
    }
`;

const Input = styled.input`
    padding: 15px 20px;
    margin-bottom: 10px;
    color: #000;
    /* border: 2px solid #0095d2; */
    border: none;
    background-color: whitesmoke;
    border-radius: 3px;
    font-size: 16px;
`;

const Info = styled.div`
    flex: 0.5;
    text-align: center;
    display: flex;
    flex-direction: column;
    > p {
        text-align: center;
    }
`;

const Phones = styled.div`
    > p {
        :nth-child(2) {
            display: flex;
            align-items: center;
            justify-content: center;
            > img {
                width: 30px;
                margin-right: 10px;
            }
        }
        :nth-child(3) {
            margin-top: 50px;
        }
        :nth-child(4) {
            margin-top: 50px;
        }
        :nth-child(5) {
            margin-top: 40px;
            text-align: left;
            margin-left: 20px;
            font-size: 14px;
            font-weight: 600;
        }
    }
`;