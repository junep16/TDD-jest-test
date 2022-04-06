import {render, screen} from "@testing-library/react"; 
import Type from "../Type"; 
import userEvent from "@testing-library/user-event"; 
import { OrderContextProvider } from "../../../contexts/OrderContext";

test("update product's total when prpducts change", async () => {
    render(<Type order="products" />, {wrapper: OrderContextProvider}); 

    // 여행 상품 가격은 0원 부터 시작
    const productsTotal = screen.getByText("상품 총 가격:", {exact: false})
    expect(productsTotal).toHaveTextContent("0"); 

    // 아메리카 여행 상품 한 개 올리기
    const americaInput = await screen.findByRole("spinbutton", {
        name: "America"
    }); 
    userEvent.clear(americaInput); 
    userEvent.type(americaInput, "1");
    expect(productsTotal).toHaveTextContent("1000"); 

    // 영국 여행 상품 3개 더 올리기
    const englandInput = await screen.findByRole("spinbutton", {
        name: "England"
    }); 
    userEvent.type(englandInput, "3");
    expect(productsTotal).toHaveTextContent("4000"); 
})