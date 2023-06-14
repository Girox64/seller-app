import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Outlet, useParams } from "react-router-dom";
import { useProducts } from "../../../hooks";

import {
  ConditionProductChip,
  Price,
  ProductImage,
  ProductLink,
} from "../../atoms";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: ProductImage,
    sortable: false,
  },
  {
    field: "name",
    headerName: "Produit",
    renderCell: ProductLink,
    width: 300,
  },
  {
    field: "condition",
    headerName: "Condition",
    renderCell: ConditionProductChip,
    width: 150,
  },
  {
    field: "price",
    headerName: "Prix (EUR)",
    renderCell: Price,
    width: 150,
  },
  {
    field: "stock",
    headerName: "Stock",
    description: "Stock disponible à la vente",
    width: 120,
  },
];

export default function ProductsPage() {
  const { isLoading, products } = useProducts();
  const { productId } = useParams();

  const leftWidth = productId ? 7 : 12;
  const rightWidth = productId ? 5 : 0;

  return (
    <Grid container>
      <Grid item sx={{ height: 600 }} xs={leftWidth}>
        <DataGrid
          loading={isLoading}
          columns={columns}
          rows={products}
          disableRowSelectionOnClick
        />
      </Grid>
      <Grid item component="aside" xs={rightWidth}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
