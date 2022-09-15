import {
  Box,
  Button,
  Container,
  TextField,
  Stack,
  IconButton,
  InputAdornment,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  Add as AddIcon,
  DeleteOutline as DeleteOutlineIcon,
} from "@mui/icons-material";
import ConciergeCard from "../molecules/ConciergeCard";
import { concierges } from "../data/concierges";
import { useLocation, useNavigate } from "react-router-dom";

export type FormValues = {
  hasBudget: boolean;
  items: {
    material: string;
    amount: string;
    budget: number;
    comment: string;
  }[];
};

const Order: React.FC = () => {
  const {
    register,
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      hasBudget: true,
      items: [{ material: "", amount: "", budget: 0, comment: "" }],
    },

    // blur イベントからバリデーションがトリガーされる
    mode: "onBlur",
  });

  // useFieldArray に name と control を渡すことで、MUI の TextField への入力値を取得できるようになる
  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const watchHasBudget = watch("hasBudget", false);

  const onSubmit = (data: FormValues) =>
    navigate("/confirm", { state: { data: data } });

  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const conciergeId = query.get("conciergeId");

  const navigate = useNavigate();
  return (
    <>
      {conciergeId !== null ? (
        <ConciergeCard
          concierge={concierges[conciergeId]}
          conciergeId={conciergeId}
        />
      ) : (
        <></>
      )}
      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack spacing={2}>
          <Typography variant="h4">注文</Typography>
          <Select
            labelId="hasBudget"
            size="small"
            id="hasBudget"
            {...register("hasBudget", {})}
          >
            <MenuItem value={true as any}>予算あり</MenuItem>
            <MenuItem value={false as any}>予算無制限</MenuItem>
          </Select>
          {fields.map((field, index) => {
            return (
              // 必ず fields オブジェクトの id をコンポーネントの key に割り当てる
              <React.Fragment key={field.id}>
                <Stack spacing={2}>
                  <Box display="flex">
                    <TextField
                      sx={{ mr: 2, flex: 4 }}
                      size="small"
                      label="品名"
                      // arrays/array フィールドを使用する場合、input の name 属性を name[index] のように割り当てることができる
                      {...register(`items.${index}.material`, {
                        required: true,
                      })}
                    />
                    <TextField
                      sx={{ mr: 1, flex: 3 }}
                      size="small"
                      type="string"
                      label="量"
                      {...register(`items.${index}.amount`, {
                        required: true,
                      })}
                    />
                    {watchHasBudget ? (
                      <TextField
                        sx={{ flex: 2 }}
                        size="small"
                        type="number"
                        label="予算"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">￥</InputAdornment>
                          ),
                        }}
                        {...register(`items.${index}.budget`, {})}
                      />
                    ) : (
                      <></>
                    )}
                    <IconButton
                      aria-label="delete"
                      onClick={() => remove(index)}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                  <TextField
                    sx={{ mr: 2, flex: 1 }}
                    type="string"
                    label="要望"
                    {...register(`items.${index}.comment`, {
                      maxLength: 1000,
                    })}
                  >
                    円
                  </TextField>
                </Stack>
                <Box color="error.main" fontSize={12}>
                  {/* ErrorMessage コンポーネントは name 属性で関連付けされた入力のエラーメッセージを表示するためのシンプルなコンポーネント */}
                  <ErrorMessage
                    errors={errors}
                    name={`items.${index}.material`}
                    message="⚠ 品名を入力してください"
                    as="p"
                  />
                  <ErrorMessage
                    errors={errors}
                    name={`items.${index}.material`}
                    message="⚠ 量欄を入力してください"
                    as="p"
                  />
                  <ErrorMessage
                    errors={errors}
                    name={`items.${index}.comment`}
                    message="⚠ 要望欄は1000文字以下です"
                    as="p"
                  />
                </Box>
              </React.Fragment>
            );
          })}
        </Stack>
        <Button
          // MUI v5 から sx props で Button コンポーネントにも直接スタイルを書けるようになった
          sx={{ mt: 1 }}
          startIcon={<AddIcon />}
          // append 関数はフィールドの最後に input を追加する
          onClick={() =>
            append({
              material: "",
              amount: "",
              budget: 0,
              comment: "",
            })
          }
        >
          品物を追加する
        </Button>
        <Box textAlign="center" mt={2}>
          <Button
            variant="outlined"
            sx={{ mr: 1 }}
            onClick={() =>
              reset({
                items: [{ material: "", amount: "", budget: 0, comment: "" }],
              })
            }
          >
            リセット
          </Button>
          <Button
            color="primary"
            variant="contained"
            disableElevation
            // submit イベントからバリデーションがトリガーされる
            onClick={handleSubmit(onSubmit)}
          >
            注文
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Order;
