import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/products";
import { Form } from "react-bootstrap";

interface Props {
  selected: string;
  onChange: (category: string) => void;
}

export const CategoryFilter = ({ selected, onChange }: Props) => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) return <div>Loading categories...</div>;

  return (
    <Form.Select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="mb-4"
      style={{ maxWidth: "300px" }}
    >
      <option value="">All Categories</option>
      {categories?.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </Form.Select>
  );
};
