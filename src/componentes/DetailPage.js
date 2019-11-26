import React from 'react';

const DetailPage = (image) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image.image.src} alt="Card image cap" />
        <CardBody>
          <CardTitle>{image.image.title}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>{image.image.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default DetailPage;