import { useBackgroundStore } from '../store/backgroundStore';
import * as Backgrounds from './Backgrounds';

export default function Content() {
  const { setBackgroundName } = useBackgroundStore();

  const handleBackgroundSelect = (backgroundName: string) => {
    setBackgroundName(backgroundName);
    
    // Guardar en localStorage
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('selectedBackgroundName', backgroundName);
      
      // Disparar evento personalizado
      window.dispatchEvent(new CustomEvent('backgroundChanged', {
        detail: { backgroundName }
      }));
    }
  };

  const backgrounds = [
    { name: 'MinimalLight', component: Backgrounds.MinimalLight, isDark: false },
    { name: 'MinimalLightWithNoise', component: Backgrounds.MinimalLightWithNoise, isDark: false },
    { name: 'MinimalLightGradient', component: Backgrounds.MinimalLightGradient, isDark: false },
    { name: 'MinimalLightSpotlight', component: Backgrounds.MinimalLightSpotlight, isDark: false },
    { name: 'MinimalGrid', component: Backgrounds.MinimalGrid, isDark: false },
    { name: 'MinimalDarkGrid', component: Backgrounds.MinimalDarkGrid, isDark: true },
    { name: 'MinimalDots', component: Backgrounds.MinimalDots, isDark: false },
    { name: 'MinimalDarkDots', component: Backgrounds.MinimalDarkDots, isDark: true },
    { name: 'MinimalGradientSubtle', component: Backgrounds.MinimalGradientSubtle, isDark: false },
    { name: 'MinimalSpotlightPattern', component: Backgrounds.MinimalSpotlightPattern, isDark: false },
    { name: 'MinimalDarkSpotlightPattern', component: Backgrounds.MinimalDarkSpotlightPattern, isDark: true },
    { name: 'SoftGradientBlue', component: Backgrounds.SoftGradientBlue, isDark: false },
    { name: 'SoftGradientGray', component: Backgrounds.SoftGradientGray, isDark: false },
    { name: 'MinimalVignette', component: Backgrounds.MinimalVignette, isDark: false },
    { name: 'MinimalLightGrid', component: Backgrounds.MinimalLightGrid, isDark: false },
    { name: 'AuroraBorealis', component: Backgrounds.AuroraBorealis, isDark: true },
    { name: 'CrystalMorphism', component: Backgrounds.CrystalMorphism, isDark: false },
    { name: 'NebulaBackground', component: Backgrounds.NebulaBackground, isDark: true },
    { name: 'HolographicWave', component: Backgrounds.HolographicWave, isDark: true },
    { name: 'GeometricArt', component: Backgrounds.GeometricArt, isDark: false },
    { name: 'LiquidGradient', component: Backgrounds.LiquidGradient, isDark: false },
    { name: 'CyberGrid', component: Backgrounds.CyberGrid, isDark: true }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Mostrar notificación de éxito
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('showToast', {
          detail: { message: 'Código copiado al portapapeles', type: 'success' }
        }));
      }
    } catch (err) {
      // Mostrar notificación de error
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('showToast', {
          detail: { message: 'Error al copiar código', type: 'error' }
        }));
      }
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full">
      <Backgrounds.HolographicWave />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
}
