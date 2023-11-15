/*
    ! Custom Hook
    * React hooklarına benzer şekilde görev yapan 
    * proje ihtiyacına göre kendimiz oluşturduğumuz 
    * görevlerini bizim belirlediğimiz hooklardır.
    * Genelde veriyi v veriyi güncelleyecek fonksiyonu dizi içinde dönerler

*/

import { useEffect, useState } from "react";

export function useLocaleStorage<T>(key: string, initialValue: T) {
  //1.statei tanımlama
  const [value, setValue] = useState<T>(() => {
    // localden değerleri al
    const jsonValue = localStorage.getItem(key);

    // localde eleman yoksa initialvalue ile tanımla
    if (jsonValue === null) {
      return initialValue;
    } else {
      // localde eleman varsa localde veriyi state e aktar
      return JSON.parse(jsonValue);
    }
  });

  //2.state her değiştiğinde localestorageı güncelle
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  //3. hooku kullanılması için statei ve değiştirme methodunu return ederiz
  return [value, setValue] as [T, typeof setValue];
}
