import App from './TodoList';
import styled from 'styled-components'
import Card from '../Components/Card';

const TodoItems = ({taskobj}) => {
  
    const CardContainer = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction:colum;
    
    justify-content: center;
    flex-wrap:wrap;
    background: #1f2229;
    overflow: hidden;
  `;
  const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
return (
    <CardContainer>
    {taskobj?.map((item, index)=> {
           return(
               <>
                  <Card title={item.title} index={index}/>
                    <Separator /> 
               </>
           )
       })}
    </CardContainer>
   
)
};

export default TodoItems;