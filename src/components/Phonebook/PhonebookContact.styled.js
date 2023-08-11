import { styled } from 'styled-components';


export const Container = styled.section`
width: 400px;
margin: 0 auto;
margin-top: 60px;
`;

export const  InputForm = styled.form`
display: flex;
flex-direction: column;
align-items: left;
border: 2px solid lightgray;
padding: 20px;
gap: 20px; 
`;

export const  InputName = styled.div`
width: 250px;
display: flex;
flex-direction: column;
align-items: left;
gap: 20px;
`;

export const  InputNamber = styled.div`
width: 250px;
display: flex;
flex-direction: column;
align-items: left;
gap: 20px;
`;


export const Button = styled.button`
  border: 2px solid lightgray;
  border-radius: 4px;
  padding: 10px 15px;
  max-width: 150px;
  margin-right: 45px;
`;

export const  InputFind = styled.label`
width: 250px;
display: flex;
flex-direction: column;
align-items: left;
/* gap: 20px; */
`;

export const ButtonDelete = styled.button`
  border: 2px solid lightgray;
  border-radius: 8px;
  margin-left: 30px;
  `;
  export const ContactName = styled.li`
  margin-bottom: 10px`