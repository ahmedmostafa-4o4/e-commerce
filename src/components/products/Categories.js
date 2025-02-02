import { Carousel } from "react-bootstrap";

function Categories({ categories }) {
  return (
    <div className="category-bar">
      <ul className="categories">
        <Carousel interval={null}>
          {categories.map((category) => (
            <Carousel.Item key={category.id}>{category.title}</Carousel.Item>
          ))}
        </Carousel>
      </ul>
    </div>
  );
}

export default Categories;
