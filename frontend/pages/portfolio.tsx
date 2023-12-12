import React from 'react'
import { client } from "../ulits/configSanity"
import PortableText from 'react-portable-text';





interface Iportfolio {
    _id: string;
    title: string;
    description: any;
    _createdAt: string;
  }

  async function getData() {
    const query = `*[_type == 'Portfolio']`;
    const data = await client.fetch(query);
    return data as Iportfolio[];
  }
  const portfolio = async () => {
    const data = (await getData()) as Iportfolio[];
    console.log(data);
   
  return (
    <div>portfolio
        <div>
            {/* {data?.map((item) =>(
                <div>
                    <PortableText content={item?.description} /> 
                </div>
            ))} */}
        </div>
    </div>
  )
}

export default portfolio