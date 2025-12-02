"use client";

import PublicationCard from "@/components/PublicationCard";
import { useState } from "react";

export default function Filter({
    publications
}: {
    publications: any[] | null;
}) {
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'maintenance' | "intégration d'équipements" | "équipements de manutention et de convoyage">('all');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as 'all' | 'maintenance' | "intégration d'équipements" | "équipements de manutention et de convoyage";
        setSelectedFilter(value);
    }

    return (
        <>
            <div className="filter-news">
                <select onChange={handleChange} value={selectedFilter}>
                    <option value="">Tous les types</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="intégration d'équipements">Intégration</option>
                    <option value="équipements de manutention et de convoyage">Équipement</option>
                </select>
            </div>

            <div className="news-grid fade-in">
                {publications && publications.length > 0 ? (
                    selectedFilter !== 'all' && selectedFilter ? (
                        publications.filter(pub => pub.category.toLowerCase() === selectedFilter).map((pub) => (
                            <PublicationCard key={pub.id} publication={pub} />
                        ))
                    ) :
                    publications.map((pub) => (
                        <PublicationCard key={pub.id} publication={pub} />
                    ))
                ) : (
                    <p>Aucune réalisation pour le moment.</p>
                )}
            </div>
        </>
    )
}