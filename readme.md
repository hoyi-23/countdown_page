## 簡易倒數頁面

[Demo Page](https://hoyi-23.github.io/countdown_page/index.html)

<hr>

## Date
JavaScript Date 物件可以指向某一個時間點。

## 語法
```
new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
```
## MDN 

* 如果沒有傳入任務參數到建構子，會依系統設定建立出代表當下時間的 Date 物件。
* 如果傳入至少兩個參數，缺少日期的話會設為 1，其它參數則會被設定為 0。
* JavaScript 的 date 基於世界標準時間（UTC）1970 年 1 月 1 日午夜的毫秒數。一天有 86,400,000 毫秒。JavaScript Date 物件可表示的範圍由世界標準時間（UTC） 1970 年 1 月 1 日為基準的 -100,000,000 天到 100,000,000 天。
* JavaScript Date 物件提供跨平台一致的行為。這個時間數值可以在系統之間傳遞表示相同的時間，如果建立本地的時間物件，其表現將會與本地習慣相對應。
* JavaScript Date 物件提供了若干 UTC (通用的) 以及本地時間方法。UTC，也被稱為格林威治標準時間（GMT）被指定作為世界時間的標準。本地時間指的是被設定在執行 JavaScript 電腦上的時間。
* 以函數方式呼叫 Date （也就是省略 new (en-US) 建構子）將會回傳一個表示當下時間日期的字串。

## 使用

```
var today = new Date();

var birthday = new Date(1995, 11, 17);

//取得還有多少時間 ， getTime()
var futureday = new Date(2222, 11, 11).getTime();
```
使用getTime會將日期轉為數值型態

## 其他用法


<table>
<tr>
  <th>方法</th>
  <th>用途</th>
<tr/>
<tr>
  <td>getFullYear()</td>
  <td>取得是幾年</td>
</tr>
<tr>
  <td>getMonth()</td>
  <td>取得是幾月(0-11)</td>
</tr>
<tr>
  <td>getHours()</td>
  <td>取得是幾時 (0-23)</td>
</tr>
<tr>
  <td>getMinutes()</td>
  <td>取得是幾分 (0-59)</td>
</tr>
<tr>
  <td>getSeconds()</td>
  <td取得是幾秒 (0-59)</td>
</tr>
<tr>
  <td>getMilliseconds()</td>
  <td>取得是幾毫秒 (0-999)</td>
</tr>
<tr>
  <td>getDay()</td>
  <td>取得是星期幾 (0-6)</td>
</tr>
<tr>
  <td>getTime()</td>
  <td>取得從 1970-01-01 00:00:00 UTC 累計的毫秒數</td>
</tr>
</table>

### 設定日期和時間相關的方法：

<table>
<tr>
  <th>方法</th>
  <th>用途</th>
<tr/>
<tr>
  <td>setFullYear()</td><td>設定是是幾年</td>
</tr>
<tr>
<td>setMonth()</td><td>設定是幾月 (0-11)</td>
</tr>
<tr>
<td>setDate()</td><td>設定是幾日 (1-31)</td>
</tr>
<tr>
<td>setHours()</td><td>設定是幾時 (0-23)</td>
</tr>
<tr>
<td>setMinutes()</td><td>設定是幾分 (0-59)</td>
</tr>
<tr>
<td>setSeconds()</td><td>設定是幾秒 (0-59)</td>
</tr>
<tr>
<td>setMilliseconds()</td><td>設定是幾毫秒 (0-999)</td>
</tr>
<tr>
<td>setTime()</td><td>用 timestamp milliseconds 設定是什麼日期時間</td>
</tr>
</table>
