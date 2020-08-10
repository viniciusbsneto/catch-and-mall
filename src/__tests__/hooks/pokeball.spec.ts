import { renderHook } from '@testing-library/react-hooks';
import { usePokeball, PokeballProvider } from '../../hooks/pokeball';

describe('Pokeball hook', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => usePokeball(), {
      wrapper: PokeballProvider,
    });

    console.log(result.current);
  });
});
