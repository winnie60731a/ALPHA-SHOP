const cityData = [
  { id: 0, value: '', city: '請選擇縣市' },
  { id: 1, value: 'KLU', city: '基隆市' },
  { id: 2, value: 'TPH', city: '新北市' },
  { id: 3, value: 'TPE', city: '臺北市' },
  { id: 4, value: 'TYC', city: '桃園市' },
  { id: 5, value: 'HSH', city: '新竹縣' },
  { id: 6, value: 'HSC', city: '新竹市' },
  { id: 7, value: 'MAC', city: '苗栗市' },
  { id: 8, value: 'MAL', city: '苗栗縣' },
  { id: 9, value: 'TXG', city: '臺中市' },
  { id: 10, value: 'CWH', city: '彰化縣' },
  { id: 11, value: 'CWS', city: '彰化市' },
  { id: 12, value: 'NTC', city: '南投市' },
  { id: 13, value: 'NTO', city: '南投縣' },
  { id: 14, value: 'YLH', city: '雲林縣' },
  { id: 15, value: 'CHY', city: '嘉義縣' },
  { id: 16, value: 'CYI', city: '嘉義市' },
  { id: 17, value: 'TNN', city: '臺南市' },
  { id: 18, value: 'KHH', city: '高雄市' },
  { id: 19, value: 'IUH', city: '屏東縣' },
  { id: 20, value: 'PTS', city: '屏東市' },
  { id: 21, value: 'ILN', city: '宜蘭縣' },
  { id: 22, value: 'ILC', city: '宜蘭市' },
  { id: 23, value: 'HWA', city: '花蓮縣' },
  { id: 24, value: 'HWC', city: '花蓮市' },
  { id: 25, value: 'TTC', city: '臺東市' },
  { id: 26, value: 'TTT', city: '臺東縣' },
  { id: 27, value: 'PEH', city: '澎湖縣' },
  { id: 28, value: 'KMN', city: '金門縣' },
  { id: 29, value: 'LNN', city: '連江縣' } 
];

export default function StepOne() {
  return (
    <section className="form-container col col-12">
      <form className="col col-12" data-phase="address">
        <h3 className="form-title">寄送地址</h3>
        <section className="form-body col col-12">
          <div className="col col-12">
            <div className="input-group input-w-lg-2 input-w-sm-s1">
              <div className="input-label">稱謂</div>
              <div className="select-container">
                <select>
                  <option value="mr" selected="">
                    先生
                  </option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className="input-group input-w-lg-4 input-w-sm-s2">
              <div className="input-label">姓名</div>
              <input type="text" placeholder="請輸入姓名" />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-full">
              <div className="input-label">電話</div>
              <input type="tel" placeholder="請輸入行動電話" />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-full">
              <div className="input-label">Email</div>
              <input type="email" placeholder="請輸入電子郵件" />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-2 input-w-sm-full">
              <div className="input-label">縣市</div>
              <div className="select-container">
                <select required="">
                  {cityData.map(data => {
                    return <option key={data.id} value={data.value}> {data.city}</option>
                  })}
                </select>
              </div>
            </div>
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">地址</div>
              <input type="text" placeholder="請輸入地址" />
            </div>
          </div>
        </section>
      </form>
    </section>
  )
}