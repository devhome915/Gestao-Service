## Implementação das cores

Todas as cores da interface deverão ser aplicadas por variáveis CSS,
utilizando var(). Não utilizar valores de cor diretamente nos componentes.

Os valores da paleta serão definidos de forma centralizada em :root,
no arquivo global de estilos.

Variáveis previstas:

| Uso | Variável CSS |
|---|---|
| Cor principal | --color-primary |
| Cor principal ao passar o mouse | --color-primary-hover |
| Fundo da aplicação | --color-background |
| Fundo dos componentes | --color-surface |
| Texto principal | --color-text |
| Texto secundário | --color-text-secondary |
| Bordas decorativas | --color-border |
| Bordas dos campos | --color-input-border |
| Sucesso | --color-success |
| Erro e ações destrutivas | --color-danger |
| Foco do teclado | --color-focus |

Os valores literais, como códigos hexadecimais, ficarão restritos
à definição das variáveis da paleta. Os estilos de páginas,
componentes e estados deverão consumir essas variáveis com var().

Essa organização permite alterar a identidade visual de forma
centralizada e facilita a criação de temas no futuro.

:root {
  --color-primary: #1d4ed8;
  --color-primary-hover: #1e40af;
  --color-surface: #ffffff;
}

.button-primary {
  background-color: var(--color-primary);
  color: var(--color-surface);
}

.button-primary:hover {
  background-color: var(--color-primary-hover);
}
