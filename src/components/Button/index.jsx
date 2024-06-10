import { Container } from './styles';

export function Button({ title, icon: Icon, children, isLoading, ...rest}) {

  return (
    <Container type="button" {...rest}>
      {children}
      {Icon && <Icon size={30} />}
      {!isLoading && title}
      {isLoading && "Carregando..."}
    </Container>
  )
};