import Card from 'react-bootstrap/Card';



function ContactCard ({title,text,children}){
    return(
        <>
         <Card >
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        <div dangerouslySetInnerHTML={{__html: text}} />
                        </Card.Text>
                        {children}
                        <hr />
                    </Card.Body>
                 
                </Card>

        </>
    )
}
export default ContactCard