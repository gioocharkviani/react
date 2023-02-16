import Items from './Items';
import ChangeInputs from './ChangeInputs';

function Card(props){

    const MainData = [
        {
          id: 'A1',
          Title : 'Mazda' ,
          Ammount : 25323 , 
          Date : new Date(2025,3,29)
        } ,
        {
          id: 'A2',
          Title : 'Mercedes Benz' ,
          Ammount : 255323 , 
          Date : new Date(2025,6,29)
        } ,
        {
          id: 'A3',
          Title : 'Bmw' ,
          Ammount : 43323 , 
          Date : new Date(2025,6,29)
        },
        {
          id: 'A4',
          Title : 'AUDI' ,
          Ammount : 13323 , 
          Date : new Date(2021,2,29)
        }
      ]
    

  return (
    <div className='cardWrapper'>
            <ChangeInputs />
          <Items Title={MainData[0].Title} Ammount={MainData[0].Ammount}  Date={MainData[0].Date} />
          <Items Title={MainData[1].Title} Ammount={MainData[1].Ammount}  Date={MainData[1].Date} />
          <Items Title={MainData[2].Title} Ammount={MainData[2].Ammount}  Date={MainData[2].Date} />
          <Items Title={MainData[3].Title} Ammount={MainData[3].Ammount}  Date={MainData[3].Date} />
    </div>
  )
}

export default Card
