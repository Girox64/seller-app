import { Image } from "mui-image";
import { oneOf, shape, string } from "prop-types";

export default function ProductImage({ row }) {
  return <Image src={row.imageUrl} alt={row.name} width={150} duration={250} />;
}

ProductImage.propTypes = {
  row: shape({
    condition: oneOf(["new", "used"]),
    imageUrl: string,
    name: string,
  }),
};
