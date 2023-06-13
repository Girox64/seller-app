import { ArrowBack } from "@mui/icons-material";
import { CircularProgress, IconButton, Stack, Typography } from "@mui/material";
import { Image } from "mui-image";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../../hooks";

// TODO : refactor Image and ProductImage
export default function ProductRoute() {
  const { productId } = useParams();
  const { isLoading, product } = useProducts({ productId });

  if (isLoading) return <CircularProgress />;

  const { name, imageUrl } = product;

  return (
    <>
      <Stack direction="row" spacing={2}>
        <IconButton aria-label="back" component={Link} to="/products">
          <ArrowBack />
        </IconButton>
        <Typography variant="h4">{name}</Typography>
      </Stack>
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={400}
        duration={250}
      />
    </>
  );
}
