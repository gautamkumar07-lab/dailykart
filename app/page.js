'use client';
import {useState} from "react";
export default function Home(){
 const [tab,setTab]=useState("Dashboard");
 return <main>
 <header><div className="brand"><span>🛒</span>DailyKart</div>
 <nav><button onClick={()=>setTab("Dashboard")}>Dashboard</button><button onClick={()=>setTab("Analytics")}>Analytics</button><button onClick={()=>setTab("Admin")}>Admin</button></nav></header>
 <section className="hero"><div><small>ENTERPRISE PLATFORM</small><h1>DailyKart</h1><p>Multi-vendor ecommerce marketplace for customers, vendors and administrators.</p><button className="primary">Open {tab}</button></div>
 <div className="panel"><b>Platform Status</b><strong>Operational</strong><span>REST API • RBAC • PostgreSQL • Docker</span></div></section>
 <section className="grid"><article className="card"><div className="icon">✓</div><h3>Authentication & OAuth</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>User Profile Management</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Product Catalog</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Category Management</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Product Search Engine</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Advanced Filters</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Shopping Cart</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Wishlist</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Coupon System</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Checkout System</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Razorpay / Stripe Integration</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Order Tracking</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Inventory Management</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Vendor Dashboard</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Admin Dashboard</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Customer Reviews</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Product Ratings</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Sales Analytics</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Invoice Generation</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Notification Center</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Returns & Refunds</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Address Book</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Vendor Onboarding</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Commission Management</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Tax Management</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Promotions & Banners</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Audit Logs</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Support Tickets</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>Fraud Monitoring</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article>
<article className="card"><div className="icon">✓</div><h3>API Management</h3><p>Enterprise module with validation, authorization, audit logging and responsive UX.</p></article></section>
 </main>}
