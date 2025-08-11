import page from "@/app/page";
import { $api } from "@/lib/services";
import {
  Box,
  Button,
  TextField,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
} from "@mui/material";
import dayjs from "dayjs";
import { useQueryState, parseAsIsoDate, parseAsInteger } from "nuqs";

type Props = {
  onClickDetail(cartId: string): void;
};

export default function CartTable(props: Props) {
  const [dateFrom, setDateFrom] = useQueryState(
    "dateFrom",
    parseAsIsoDate.withDefault(dayjs().subtract(30, "day").toDate())
  );
  const [dateTo, setDateTo] = useQueryState(
    "dateTo",
    parseAsIsoDate.withDefault(dayjs().toDate())
  );

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const { data: cartDatas } = $api.useQuery("get", "/carts");
  const sortedCartDatas = cartDatas
    ?.sort((a, b) =>
      // @ts-expect-error date should exists
      dayjs(b.date).diff(dayjs(a.date))
    )
    .filter(
      (cart) =>
        // @ts-expect-error date should exists
        dayjs(cart.date, "YYYY-MM-DD").isAfter(dateFrom) &&
        // @ts-expect-error date should exists
        dayjs(cart.date, "YYYY-MM-DD").isBefore(dateTo)
    );
  const totalPages = Math.ceil((sortedCartDatas?.length || 0) / 5);
  const paginatedCartDatas =
    sortedCartDatas?.slice((page - 1) * 5, page * 5) || [];

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ fontWeight: 700, marginBottom: 2 }}
        >
          Create Cart
        </Button>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <TextField
            label="From"
            type="date"
            size="small"
            InputLabelProps={{ shrink: true }}
            value={dayjs(dateFrom).format("YYYY-MM-DD")}
            onChange={(e) => setDateFrom(dayjs(e.target.value).toDate())}
          />
          <Typography>-</Typography>
          <TextField
            label="To"
            type="date"
            size="small"
            InputLabelProps={{ shrink: true }}
            value={dayjs(dateTo).format("YYYY-MM-DD")}
            onChange={(e) => setDateTo(dayjs(e.target.value).toDate())}
          />
        </Box>
      </Box>
      <Box>
        <Box sx={{ minWidth: 400 }}>
          <Table sx={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!paginatedCartDatas ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : paginatedCartDatas.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No carts found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedCartDatas.map((cart) => (
                  <TableRow key={cart.id}>
                    <TableCell>
                      {dayjs(cart.date).format("DD MMMM YYYY HH:mm:ss")}
                    </TableCell>
                    <TableCell>{cart.userId}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => props.onClickDetail(cart.id)}
                      >
                        Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
}
