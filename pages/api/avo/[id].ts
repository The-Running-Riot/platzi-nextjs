import { NextApiRequest,NextApiResponse } from 'next'; //tipo correcto por que ts lo pide a NextApiRequest en vez de Incoming Message y Next ApiResponse en vez de ServerResponse que los traia node
import DB from '@database';

const allAvos=async(request:NextApiRequest, response:NextApiResponse)=>{ //Estos son objetos extendidos de https y nos dan las capacidades de query.
    const db=new DB();

    const id = request.query.id;

    const entry= await db.getById(id as string);

    // response.statusCode=200; //ok
    // response.setHeader('Content-type','application/json');
    // response.end(JSON.stringify({data:entry}));

    response.status(200).json(entry); //Esta linea de codigo es igual que la anterior comentada, solo que usando gracias a los helpers de Nextjs (status y json)
}

export default allAvos;