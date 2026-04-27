### React Router
- เอามาช่วยสร้างที่อยู่จำลองให้เพจต่าง ๆ ของเว็บไซต์ เพราะว่ารีแอคมันใช้ไฟล์ index.html อันเดียว 
- ทำที่อยู่ เพื่อ ช่วยให้ SEO หาเจอ
- การที่ผู้ใช้รู้ว่าอยู่ที่ไหน ก็เป็น experience ที่ดีสำหรับบางคน *-- dev นั่นเอง*
#### Short descriptive URLs are best for SEO
- ตั้งชื่อ URL ควรอ่านได้ทั้งคนและคอม และสั้น ๆ ด้วย
#### React Router Modes
เป็นลูกเล่นนึงที่เอาไปเล่าได้ในการพรีเซ้นโปรเจ็กต์ เอาไว้ handle การโหลดเดต้าที่จะมาอยู่ใน UI
- **Declarative**
	- เป็นแบบดั้งเดิม
- **Data ✅**
	- แนะนำให้ใช้
	- [see this for getting started](https://reactrouter.com/start/data/installation)
- Framework (Remix) 
	- แบบง่าย ไม่แนะนำให้ใช้
	- โปรเจ็กต์ยังไม่ค่อยนิ่ง
	- Remix เป็นเครื่องมือในการสร้าง frontend ตัวหนึ่ง

#### Concept Summary (สรุปคอนเซปต์หลักของการทำ Routing)

| คอนเซปต์ (Concept)     | ตัวอย่างโค้ด (Example Code)    | คำอธิบาย (Explanation)                                         |
| :--------------------- | :----------------------------- | :------------------------------------------------------------- |
| **Routes**             | `createBrowserRouter()`        | ประกาศและกำหนดโครงสร้าง Route ทั้งหมดของแอปพลิเคชัน            |
| **Route Elements**     | `element: <Component />`       | ระบุว่า Component ไหนจะถูกนำมาแสดงผลในแต่ละ Route              |
| **Nested Routes**      | `children: [{...}]`            | รองรับการทำ Layout ที่ใช้ UI ร่วมกันผ่าน Route ย่อย            |
| **Links & Navigation** | `<Link />` และ `useNavigate()` | จัดการการนำทาง (เปลี่ยนหน้า) ระหว่างหน้าเว็บต่างๆ              |
| **Dynamic Routing**    | `path: "products/:productId"`  | รองรับการรับค่าพารามิเตอร์ผ่าน URL (เช่น ดึง ID ของสินค้า)     |
| **Error Handling**     | `errorElement`                 | ดักจับและแสดงผลข้อความแจ้งเตือนเมื่อเกิด Error (เช่น หน้า 404) |
| **Route Hierarchy**    | ภายใต้พร็อพเพอร์ตี้ `children` | จัดกลุ่ม Route ที่เกี่ยวข้องกันไว้ภายใต้ Route แม่เดียวกัน     |

#### Component/Hook (สรุปเครื่องมือที่ใช้งานบ่อยใน React Router)

| Component / Hook          | ประเภท (What It Is) | หน้าที่หลัก (What It Does)           | การใช้งานทั่วไป (Typical Usage)                                                                          |
| :------------------------ | :------------------ | :----------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **`createBrowserRouter`** | Function (API)      | กำหนดโครงสร้าง Route ของแอป          | ใช้ตั้งค่า Route ทั้งหมด รวมถึง Nested Routes, โหลดเดอร์ และการจัดการ Error                              |
| **`RouterProvider`**      | Component           | กระจายข้อมูล Route ให้แอปทำงานได้    | ใช้ครอบ (Wrap) แอปพลิเคชันเพื่อเรนเดอร์ Router ที่เราสร้างไว้                                            |
| **`Link`**                | Component           | นำทางภายในฝั่ง Client                | ทำงานคล้ายแท็ก `<a>` แต่เปลี่ยนหน้าโดยไม่ทำให้เว็บโหลดใหม่ (No full-page reload) ช่วยรักษา State เดิมไว้ |
| **`Outlet`**              | Component           | แสดงผล Route ลูก (Child routes)      | ทำหน้าที่เป็นพื้นที่ว่าง (Placeholder) ใน Component แม่ เพื่อนำ Component ลูกมาแทรกแสดงผล                |
| **`useParams`**           | Hook                | จัดการ Dynamic URL Parameters        | ดึงค่าพารามิเตอร์ที่เปลี่ยนไปมาได้จาก URL มาใช้งาน (เช่น `productId`)                                    |
| **`Form`**                | Component           | จัดการการส่งฟอร์ม (Form submissions) | จัดการฟอร์มได้อย่างเป็นระเบียบผ่าน `action()` โดยไม่ต้องเขียน JavaScript ดัก Event เอง                   |

#### React Routing Workshop Recap**
>- Outlet ช่วยทำให้ไดนามิก
>- เราใช้ `<Outlet />` ที่คอมโพเนนต์แม่ แล้วทำให้แสดงผล children ได้ *-- อารมณ์เหมือน placeholder // user เลือกได้ว่าจะเอา Component ไหนมาเรนเดอร์ได้ด้วย*
>- ใน `path:` การใส่ `/:<ชื่อตัวแปร>` ทำให้เป็น **Dynamic Routing**