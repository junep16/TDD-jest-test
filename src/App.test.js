import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.queryBy(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const lintTest = screen.getByRole('button', {
    name: 'lintTest'
  })
  expect(lintTest).toHaveTextContent('lintTest'); 

  // getBy 둘 이상의 일치요소 발견 시 오류 생성 
  // queryBy 요소가 없으면 null 반환
  // findBy 
});
